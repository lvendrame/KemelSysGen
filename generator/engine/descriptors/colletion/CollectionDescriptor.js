const collectionDictionary = require('./CollectionDictionary');

export default class CollectionDescriptor {
    constructor(name = '', fields=[]){
        this.name = name;
        this.fields = fields;

        collectionDictionary[name] = this;
    }

    addField(field) {
        field.parent = this;
        this.fields.push(field)
    }
}