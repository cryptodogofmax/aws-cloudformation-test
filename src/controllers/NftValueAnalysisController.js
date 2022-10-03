import axios from "axios";

export default class NftValueAnalysisController {
  static baseUrl = "http://localhost:8003";

  static async requestPublic_(requestConfig) {
    try {
      const config = {
        baseURL: this.baseUrl,
        headers: {
          "Content-Type": "application/json",
        },
        ...requestConfig,
      };

      const response = await axios(config);

      return response.data;
    } catch (error) {
      console.log("[ApiService]", error);
      throw error;
    }
  }

  static async getAssetsInCollection() {
    return this.requestPublic_({
      method: "GET",
      url: "/assets_in_collection/castaways-the-raft",
    });
  }
}
