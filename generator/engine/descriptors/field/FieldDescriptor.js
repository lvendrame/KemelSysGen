const { STRING } = require('./FieldTypes');
const { Default } = require('./FieldUsageType');

export default class FieldDescriptor {
    constructor(name = '', type = STRING, feature, validators = [], usageType = Default) {
        this.name = name;
        this.type = type;
        this.feature = feature;
        this.validators = validators;
        this.usageType = usageType;
        this.parent = null;
    }

    appendValidator(validator) {
        this.validators.push(validator);
    }

    addReference(field) {
        this.referenceField = field;
    }
}