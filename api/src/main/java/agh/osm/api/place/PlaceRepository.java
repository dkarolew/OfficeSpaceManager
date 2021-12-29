package agh.osm.api.place;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.stream.Collectors;

@Repository
public class PlaceRepository {

    private final JdbcTemplate jdbcTemplate;

    public PlaceRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Place> getAllPlaceForSector() {
        String sql = "select * from place";
        return jdbcTemplate.query(sql, (resultSet, i) -> mapToPlace(resultSet));
    }

    public long getIdForGivenPlace(long number, String type) {
        String sql = "select place_id from place where number = ? and type = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{number, type}, Long.class);
    }

    public void save(Place place) {
        String sql = "insert into place (place_id, sector_id, number, type, state) values (?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, place.getId(), place.getSectorId(), place.getNumber(), place.getType(), place.getState());
    }

    public void update(long placeId, PlaceState state) {
        String sql = "update place set state = ? WHERE place_id = ?";
        jdbcTemplate.update(sql, state.getType(), placeId);
    }

    Place delete(long id) {
        String sql = "delete from place WHERE place_id = ?";
        Place deletedFile = getPlaceById(id);
        jdbcTemplate.update(sql, id);
        return deletedFile;
    }

    public Place getPlaceById(long id) {
        return getAllPlaceForSector().stream()
                .filter(e -> e.getId() == id)
                .collect(Collectors.toList())
                .get(0);
    }

    private Place mapToPlace(ResultSet r) throws SQLException {
        return new Place(r.getLong("place_id"), r.getLong("sector_id"),
                r.getString("number"), PlaceType.valueOf(r.getString("type")),
                PlaceState.valueOf(r.getString("state")));
    }
}
