package agh.osm.api.equipment;

public enum EquipmentType {
    MONITOR("MONITOR"),
    KEYBOARD("KEYBOARD"),
    MOUSE("MOUSE");

    private final String type;

    EquipmentType(final String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}
