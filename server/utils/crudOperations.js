/**crud - add, view, view all, update, delete */
export class Crud {
  constructor(dataModel) {
    this._dataModel = dataModel;
    this._datas = this.getAllDatas();
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
        return error
    }
  }

  /**
   * Add new data
   * @param {Object} data
   * @returns datas with updated data or message
   */
  async addData(data) {
    const dataInDB = await this._dataModel(data)
    dataInDB.save()
    return dataInDB
  }

  /**
   * Check if data is in DB if not its will return the error message otherwise an object
   * of with data and index of the found data
   * @param {integer} id
   * @returns object of found data
   */
  foundDataInDB(id) {
    const data = this._datas.find(({ _id }) => _id === parseInt(id));
    if (!data) return "data not found!";
    // const index = this._datas.findIndex(({ _id }) => _id === data._id);
    return { data, id };
  }

  /**
   * Delete the data in the database
   * @param {string} id
   * @returns datas
   */
  deleteData(id) {
    const foundData = this.foundDataInDB(id);
    if (typeof foundData === "string") return foundData;

    const { data: dataInDB } = foundData;
    this._datas = this._datas.filter(({ _id }) => dataInDB._id !== _id);
    //   console.log(this._datas)
    return this._datas;
  }

  /**
   * Update the data in the database
   * @param {integer} id
   * @param {string} datas
   * @returns updated data in array
   */
  updateData(id, dataElements) {
    const foundData = this.foundDataInDB(id);
    if (typeof foundData === "string") return foundData;

    const { data: dataInDB, index: dataInDBIndex } = foundData;
    for (var elem of dataElements) {
      const { name, value } = elem;
      dataInDB[name] = value;
    }

    this._datas[dataInDBIndex] = dataInDB;
    return this._datas;
  }

  /**
   * View an individual data in the database
   * @param {string} id
   * @returns found data
   */
  getData(id) {
    const foundData = this.foundDataInDB(id);
    if (typeof foundData === "string") return foundData;

    return foundData.data;
  }
}
