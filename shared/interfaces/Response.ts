export default interface Response {
  activity: string;
  accessibility: number;
  type:
    | 'education'
    | 'recreational'
    | 'social'
    | 'diy'
    | 'charity'
    | 'cooking'
    | 'relaxation'
    | 'music'
    | 'busywork';
  participants: number;
  price: number;
  link: string;
  key: number;
}
