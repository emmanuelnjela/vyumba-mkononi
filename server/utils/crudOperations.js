export class Crud {
  constructor(dataModel) {
    this._dataModel = dataModel;
  }

  /**
   * get all data in the DB
   * @returns array of datas
   */
  async getAllDatas() {
    try {
      const datas = await this._dataModel.find({});
      return datas;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Add new data
   * @param {Object} data
   * @returns datas with added data or error message
   */
  async addData(data) {
    try {
      const dataInDB = new this._dataModel(data);
      await dataInDB.save();
      return dataInDB;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Check if data is in DB; if not, it will return an error message;
   * otherwise, return the found data.
   * @param {integer} id
   * @returns object of found data or error message
   */
  async foundDataInDB(id) {
    try {
      const data = await this._dataModel.findById(id);
      if (!data) throw new Error("Data not found!");
      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Delete the data in the database
   * @param {string} id
   * @returns success message or error message
   */
  async deleteData(id) {
    try {
      const deletedData = await this._dataModel.findOneAndDelete({ _id: id });
      if (!deletedData) throw new Error("Data not found!");
      return "deleted successfully";
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update the data in the database
   * @param {integer} id
   * @param {Object} dataElements
   * @returns updated data or error message
   */
  async updateData(id, dataElements) {
    try {
      const foundData = await this.foundDataInDB(id);
      for (const elem of dataElements) {
        const { name, value } = elem;
        foundData[name] = value;
      }
      await foundData.save(); // Save the updated data back to the database
      return foundData;
    } catch (error) {
      throw error;
    }
  }

  /**
   * View an individual data in the database
   * @param {string} id
   * @returns found data or error message
   */
  async getData(id) {
    try {
      const data = await this.foundDataInDB(id);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
