function setLookUpValue(fieldName, fieldId, value, entityType) {
    /**
     * @param {fieldName} Field name is the field you're setting...
     * @param {fieldId} Field Id is the id for the field...
     * @param {value} Value..
     * @param {entityType} entity Type...
     */
    try {
        var object = [];
        object[0] = {};
        object[0].id = fieldId;
        object[0].name = value;
        object[0].entityType = entityType;
        Xrm.Page.getAttribute(fieldName).setValue(object);

    } catch (e) {
        alert("Error: " + e);

    }


}