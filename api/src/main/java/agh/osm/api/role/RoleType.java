package agh.osm.api.role;

public enum RoleType {
    ADMIN("ADMIN"),
    USER("USER");

    private final String type;

    RoleType(final String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}

