package agh.osm.api.place;

public enum PlaceType {
    ROOM("ROOM"),
    DESK("DESK");

    private final String type;

    PlaceType(final String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}
