package agh.osm.api.place;

public enum PlaceState {
    FREE("FREE"),
    DURING_RESERVATION("DURING_RESERVATION"),
    BUSY("BUSY"),
    DISABLED("DISABLED");

    private final String type;

    PlaceState(final String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}
