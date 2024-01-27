/*
Reviewed and fixed by Shlomi Fish (http://www.shlomifish.org/)
 */

var classes = [];

function getProperties(object) {
    return Object.keys(object);
}

function filterOutObject(objects, object) {
    return objects.filter((o) => {
        return o !== object;
    })
}

function sameProperties(properties1, properties2) {
    let sortedProperties1 = properties1.sort();
    let sortedProperties2 = properties2.sort();

    return sortedProperties1.join('\0') === sortedProperties2.join('\0');
}
function haveSameProperties(object1, object2) {
    let properties1 = getProperties(object1);
    let properties2 = getProperties(object2);

    return sameProperties(properties1, properties2);
}

function objectCanAlreadyBeClassified(object) {
    for (let _class of classes) {
        if (sameProperties(_class, getProperties(object))) {
            return true;
        }
    }

    return false;
}

function acia(objects) {
    for (let object of objects) {
        if (objectCanAlreadyBeClassified(object)) continue;

        let otherObjects = filterOutObject(objects, object);

        for (let otherObject of otherObjects) {
            if (haveSameProperties(object, otherObject)) {
                classes.push(
                    getProperties(object).sort()
                )
                break;
            }
        }

    }
}
