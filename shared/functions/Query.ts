import Request from '../interfaces/Request';

export default function QueryBuilder(request: Request) {
  let string =
    `participants=${request.participants}` +
    `&minprice=0&maxprice=${request.price}` +
    `&minaccessibility=0&maxaccessibility=${request.accessibility}`;

  if (request.category !== undefined) string += `&type=${request.category}`;
  return string;
}
