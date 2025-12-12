export function main() {
  // Placeholder entrypoint; replace with real server bootstrap when code is added.
  if (process.env.NODE_ENV !== 'test') {
    // eslint-disable-next-line no-console
    console.log('Testing service scaffold is ready. Add your server code in src/');
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
