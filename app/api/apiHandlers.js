export const getCategories = async () => {
  try {
    const res = await fetch(
      `https://api.acharyaprashant.org/v2/legacy/courses/tags`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCourse = async () => {
  try {
    const res = await fetch(
      `https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getFAQs = async () => {
  try {
    const res = await fetch(
      `https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=english`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
