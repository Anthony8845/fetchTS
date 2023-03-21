type body = {
  id: number;
  name: string;
  info: string;
  isImportant: boolean;
  isComplited: boolean;
};
class BaseAgent {
  baseUrl = 'https://intership-liga.ru/tasks/';
  method: string;
  body: body;

  constructor(method: string, body: body) {
    this.method = method;
    this.body = body;
  }

  getMethod(): void {
    console.log(this.method, this.body);
  }
}

class ReqAgent extends BaseAgent {
  constructor(method: string, body: body) {
    super(method, body);
  }

  async resPromiseGet(): Promise<void> {
    try {
      const res = await fetch(this.baseUrl, {
        method: this.method,
      });
      const time = new Date();
      const response = await res.json();
      console.log(response, time);
    } catch {
      throw new Error('Error');
    }
  }
  async resPromisePost(): Promise<void> {
    try {
      const res = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(this.body),
      });
      console.log(this.body);
      const time = new Date();
      const response = await res.json();
      console.log(response, time);
    } catch (e) {
      throw new Error(e);
    }
  }
}

const reqBody: body = {
  id: 600,
  name: 'Client',
  info: 'Lorem ipsum dolor sit amet consectetur.',
  isImportant: false,
  isComplited: true,
};

const a = new ReqAgent('GET', reqBody);
a.getMethod();
// a.resPromisePost();
a.resPromiseGet();
