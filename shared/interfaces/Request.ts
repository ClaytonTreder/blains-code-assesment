export default interface Request {
  category:
    | 'education'
    | 'recreational'
    | 'social'
    | 'diy'
    | 'charity'
    | 'cooking'
    | 'relaxation'
    | 'music'
    | 'busywork'
    | '0';
  participants: number;
  price: number;
  accessibility: number;
}
