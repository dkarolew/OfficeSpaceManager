package agh.osm.api.place;

public class PlaceBusyException extends RuntimeException {
    public PlaceBusyException(String errorMessage) {
        super(errorMessage);
    }
}
