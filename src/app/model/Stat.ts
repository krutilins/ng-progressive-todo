export class Stat {
  title: string;
  icon: string;
  subtitle: string;

  constructor(title: string, icon: string, description: string) {
    this.title = title;
    this.icon = icon;
    this.subtitle = description;
  }
}
