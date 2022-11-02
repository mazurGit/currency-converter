class Http {

  async load<T = unknown>(
    url: string,
  ): Promise<T> {

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status.toString());
    } else {
      return await response.json();
    }
  }
}

export {Http};
