/**crud - add, view, view all, update, delete */
export class Crud {
  constructor(dataModel) {
    this._dataModel = dataModel;
    this._datas = [];
    this.initializeData();
  }

  async initializeData() {
    try {
      this._datas = await this.getAllDatas();
    } catch (error) {
      throw error;
    }
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
      this._datas.push(dataInDB);
      return this._datas;
    } catch (error) {
      throw error;
    }
  }
  /**
   * Check if data is in DB if not its will return the error message otherwise an object
   * of with data and index of the found data
   * @param {integer} id
   * @returns object of found dataS
   */
  async foundDataInDB(id) {
    try {
      const data = this._datas.find(({ _id }) => {
        return _id.toHexString() === id
      } );
      if (!data) throw new Error("Data not found!");
      console.log(this._datas)
      return { data, id };
    } catch (error) {
      throw error;
    }
  }
  /**
   * Delete the data in the database
   * @param {string} id
   * @returns datas
   */
  async deleteData(id) {
    try {
      await this._dataModel.findOneAndDelete({_id: id})
      this._datas = this._datas.filter(({ _id }) => _id.toHexString() !== id);

      return this._datas;
    } catch (error) {
      throw error;
    }
  }
  /**
   * Update the data in the database
   * @param {integer} id
   * @param {string} datas
   * @returns updated data in array
   */
  async updateData(id, dataElements) {
    console.log(id, "---=")
    try {
      const foundData = await this.foundDataInDB(id);
      const { data: dataInDB } = foundData;

      for (const elem of dataElements) {
        const { name, value } = elem;
        dataInDB[name] = value
      }
      console.log(dataInDB, dataElements)

      await dataInDB.save(); // Save the updated data back to the database
      return this._datas;
    } catch (error) {
      throw error;
    }
  }
  /**
   * View an individual data in the database
   * @param {string} id
   * @returns found data
   */
  async getData(id) {
    try {
      const foundData = await this.foundDataInDB(id);
      return foundData.data;
    } catch (error) {
      throw error;
    }
  }
}
