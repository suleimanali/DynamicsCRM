function lookUpFieldFilter(parentField, childField, childEntityField) {
    /* 
        parentField = The dynamics field value that's filtering the child field.
        childField = The lookup field been filtered.
        childEntityField = Field from child entity.
    */
    var childName = childField;
    var parentName = parentField;
    if (Xrm.Page.getControl(childName) != null) {
        Xrm.Page.getControl(childName).addPreSearch(function () {
            addFilter(parentName, childName, parentField, childEntityField);
        });
    }
}

function addFilter(parentName, childName, parentField, childEntityField) {
    var parentFieldId = null;
    var parentFieldLookUp, fetchQuery;

    try {
        if (Xrm.Page.getControl(parentName) != null && Xrm.Page.getControl(parentName).getAttribute().getValue() != null) {
            parentFieldLookUp = Xrm.Page.getControl(parentName).getAttribute().getValue();
            parentFieldId = parentFieldLookUp[0].id;
        }

        if (parentFieldId != null || parentFieldId != undefined) {
            fetchQuery = "<filter type='and'>" +
                "<condition attribute='" + childEntityField + "' operator='eq' value='" + parentFieldId + "' />" +
                "</filter>";
            Xrm.Page.getControl(childName).addCustomFilter(fetchQuery);
        }
    }
    catch (e) {
        Xrm.Utility.alertDialog("addFilter Error: " + (e.description || e.message));
    }
}
