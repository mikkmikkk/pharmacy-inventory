export default `
  type Medication {
    _id: ID!
    name: String!
    genericName: String
    quantity: Int!
    reorderLevel: Int
    expiryDate: String
    category: String
    price: Float
    location: String
    batchNumber: String
    supplier: String
    requiresPrescription: Boolean
    createdAt: String
    updatedAt: String
  }

  input MedicationInput {
    name: String!
    genericName: String
    quantity: Int!
    reorderLevel: Int
    expiryDate: String
    category: String
    price: Float
    location: String
    batchNumber: String
    supplier: String
    requiresPrescription: Boolean
  }

  type Query {
    medications: [Medication]
    medication(_id: ID!): Medication
    lowStockMedications: [Medication]
    medicationsByCategory(category: String!): [Medication]
    searchMedications(searchTerm: String!): [Medication]
  }

  type Mutation {
    addMedication(input: MedicationInput!): Medication
    updateMedication(_id: ID!, input: MedicationInput!): Medication
    deleteMedication(_id: ID!): Boolean
    updateStock(_id: ID!, quantity: Int!): Medication
  }
`;