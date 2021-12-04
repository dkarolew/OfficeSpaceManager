package agh.osm.api.equipment;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Objects;


@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonIgnoreProperties(ignoreUnknown = true)
public class EquipmentWsm {

    private final EquipmentType type;

    public EquipmentWsm(@JsonProperty("value") EquipmentType type) {
        this.type = type;
    }

    public EquipmentType getType() {
        return type;
    }

    @Override
    public int hashCode() {
        return Objects.hash(type);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        EquipmentWsm that = (EquipmentWsm) obj;
        return Objects.equals(type, that.type);
    }

    @Override
    public String toString() {
        return "EquipmentWsm{" +
                "type='" + type + '\'' +
                "}";
    }
}
