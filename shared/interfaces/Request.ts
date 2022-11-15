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
    | undefined;
  participants: number;
  price: number;
  accessibility: number;
}
