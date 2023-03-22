type body = {
  id: number;
  name: string;
  info: string;
  isImportant: boolean;
  isComplited: boolean;
};
// 'https://intership-liga.ru/tasks/'
class Agent {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get(): Promise<void> {
    try {
      const res = await fetch(this.baseUrl, {
        method: 'GET',
      });
      const response = await res.json();
      console.log('Список получен \n', response);
    } catch {
      throw new Error('Error');
    }
  }
  async post(body: body): Promise<void> {
    try {
      const res = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const response = await res.json();
      console.log('Запись добавлена \n', response);
    } catch (e) {
      throw new Error(e);
    }
  }
  async getId(path: string): Promise<void> {
    try {
      const res = await fetch(this.baseUrl + path, {
        method: 'GET',
      });
      const response = await res.json();
      console.log('Запись получена \n', response);
    } catch {
      throw new Error('Error');
    }
  }
  async patch(path: string, body: body): Promise<void> {
    try {
      const res = await fetch(this.baseUrl + path, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const response = await res.json();
      console.log('Запись изменена \n', response);
    } catch (e) {
      throw new Error(e);
    }
  }
  async delete(path: string): Promise<void> {
    try {
      const res = await fetch(this.baseUrl + path, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
        },
      });
      const response = await res.json();
      console.log('Запись удалена \n', response);
    } catch (e) {
      throw new Error(e);
    }
  }
}

const reqBody: body = {
  id: 600,
  name: 'Boss',
  info: 'Lorem ipsum dolor sit amet consectetur.',
  isImportant: false,
  isComplited: true,
};

const newReqBody: body = {
  id: 600,
  name: 'Client',
  info: 'Lorem sit amet consectetur.',
  isImportant: false,
  isComplited: true,
};

const agent = new Agent('https://intership-liga.ru/tasks/');

agent.get();
agent.post(reqBody);

setTimeout(() => {
  agent.getId('600');
  agent.patch('600', newReqBody);
}, 500);

setTimeout(() => {
  agent.delete('600');
}, 1000);
