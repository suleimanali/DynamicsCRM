function getLookUpValue(field, returnType) {
    /**
     * @param {field} Lookup field name...
     * @param {returnType} eg. "name", "id", "entityType"...
     */
    try {
        var lookupFieldObj, lookupId, lookupName, lookupLabel, lookupfieldName;
        lookupFieldObj = Xrm.Page.data.entity.attributes.get(field);
        var name = "name";
        var id = "id";
        var entityType = "entityType";
        if (lookupFieldObj != null) {
            lookupId = lookupFieldObj.getValue()[0].id;
            lookupName = lookupFieldObj.getValue()[0].entityType;
            lookupLabel = lookupFieldObj.getValue()[0].name;
            lookupfieldName = lookupLabel;
            if (lookupfieldName != null) {
                switch (returnType) {
                    case name:
                        return lookupfieldName;
                        break;
                    case id:
                        return lookupId;
                        break;
                    case entityType:
                        return lookupName;
                        break;
                    default:
                        break;

                }
            }
        }

    } catch (e) {
        alert("Error from getLookUpValue: Make sure the field name is right and the returnType param is: name, id or entityType..." + e);

    }

}