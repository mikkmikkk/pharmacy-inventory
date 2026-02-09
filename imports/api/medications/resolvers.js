import { Medications } from './collection';

export default {
  Query: {
    medications: () => Medications.find().fetch(),
    
    medication: (_, { _id }) => Medications.findOne(_id),
    
    lowStockMedications: () => 
      Medications.find({
        $where: function() {
          return this.quantity <= (this.reorderLevel || 10);
        }
      }).fetch(),
    
    medicationsByCategory: (_, { category }) => 
      Medications.find({ category }).fetch(),
    
    searchMedications: (_, { searchTerm }) => {
      const regex = new RegExp(searchTerm, 'i');
      return Medications.find({
        $or: [
          { name: regex },
          { genericName: regex },
          { batchNumber: regex }
        ]
      }).fetch();
    }
  },
  
  Mutation: {
    addMedication: (_, { input }) => {
      const id = Medications.insert({
        ...input,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      return Medications.findOne(id);
    },
    
    updateMedication: (_, { _id, input }) => {
      Medications.update(_id, {
        $set: {
          ...input,
          updatedAt: new Date()
        }
      });
      return Medications.findOne(_id);
    },
    
    deleteMedication: (_, { _id }) => {
      Medications.remove(_id);
      return true;
    },
    
    updateStock: (_, { _id, quantity }) => {
      Medications.update(_id, {
        $set: {
          quantity,
          updatedAt: new Date()
        }
      });
      return Medications.findOne(_id);
    }
  }
};