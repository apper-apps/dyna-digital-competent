import appsData from "@/services/mockData/apps.json";

// Simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const appService = {
  async getAll() {
    await delay(300);
    return appsData.map(app => ({
      ...app,
      Id: app.Id
    }));
  },

  async getById(id) {
    await delay(200);
    const app = appsData.find(app => app.Id === id);
    if (!app) {
      throw new Error("Application not found");
    }
    return { ...app };
  },

  async getFeatured() {
    await delay(250);
    return appsData
      .filter(app => app.featured)
      .map(app => ({ ...app }))
      .slice(0, 6);
  },

  async getByCategory(category) {
    await delay(300);
    return appsData
      .filter(app => app.category === category)
      .map(app => ({ ...app }));
  },

  async search(query) {
    await delay(350);
    const lowercaseQuery = query.toLowerCase();
    return appsData
      .filter(app => 
        app.name.toLowerCase().includes(lowercaseQuery) ||
        app.description.toLowerCase().includes(lowercaseQuery) ||
        app.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
      )
      .map(app => ({ ...app }));
  },

  async create(appData) {
    await delay(400);
    const maxId = Math.max(...appsData.map(app => app.Id));
    const newApp = {
      ...appData,
      Id: maxId + 1,
      createdAt: new Date().toISOString(),
      rating: 0,
      reviewCount: 0
    };
    appsData.push(newApp);
    return { ...newApp };
  },

  async update(id, appData) {
    await delay(350);
    const index = appsData.findIndex(app => app.Id === id);
    if (index === -1) {
      throw new Error("Application not found");
    }
    appsData[index] = { ...appsData[index], ...appData };
    return { ...appsData[index] };
  },

  async delete(id) {
    await delay(300);
    const index = appsData.findIndex(app => app.Id === id);
    if (index === -1) {
      throw new Error("Application not found");
    }
    const deletedApp = appsData.splice(index, 1)[0];
    return { ...deletedApp };
  }
};