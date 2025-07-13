import reviewsData from "@/services/mockData/reviews.json";

// Simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const reviewService = {
  async getAll() {
    await delay(250);
    return reviewsData.map(review => ({ ...review }));
  },

  async getById(id) {
    await delay(200);
    const review = reviewsData.find(review => review.Id === id);
    if (!review) {
      throw new Error("Review not found");
    }
    return { ...review };
  },

  async getByAppId(appId) {
    await delay(300);
    return reviewsData
      .filter(review => review.appId === appId)
      .map(review => ({ ...review }))
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  },

  async getByUserId(userId) {
    await delay(300);
    return reviewsData
      .filter(review => review.userId === userId)
      .map(review => ({ ...review }))
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  },

  async create(reviewData) {
    await delay(400);
    const maxId = Math.max(...reviewsData.map(review => review.Id));
    const newReview = {
      ...reviewData,
      Id: maxId + 1,
      createdAt: new Date().toISOString(),
      helpful: 0,
      verified: true
    };
    reviewsData.push(newReview);
    return { ...newReview };
  },

  async update(id, reviewData) {
    await delay(350);
    const index = reviewsData.findIndex(review => review.Id === id);
    if (index === -1) {
      throw new Error("Review not found");
    }
    reviewsData[index] = { ...reviewsData[index], ...reviewData };
    return { ...reviewsData[index] };
  },

  async delete(id) {
    await delay(300);
    const index = reviewsData.findIndex(review => review.Id === id);
    if (index === -1) {
      throw new Error("Review not found");
    }
    const deletedReview = reviewsData.splice(index, 1)[0];
    return { ...deletedReview };
  }
};