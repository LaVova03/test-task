import axios from "axios";

export const getStock = async (country: string, symbol: string) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:5000/stock?country=${country}&symbol=${symbol}`
    );
    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    console.error("GET Stock error", error);
  }
};
<<<<<<< HEAD

export const getAllStock = async (country: string, symbols: string[]) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:5000/stocks?country=${country}&symbols=${symbols.join(
        ","
      )}`
    );
    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    console.error("GET All Stock error", error);
  }
};
=======
>>>>>>> 6942a21e16f9939721cc71e7aa7eaea6e50d0864
