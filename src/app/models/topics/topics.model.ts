export class TopicsModel {
  id: number;
  name: string;

  constructor(input?: any) {
    if (input) {
      this.id = input.id;
      this.name = input.name;
    }
  }
}
