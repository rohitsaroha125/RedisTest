# Express Redis Cache Test Project

This project is a demonstration of how to implement Redis caching in an Express.js application using Object-Oriented Programming (OOP) patterns in Node.js. The goal of this project was to optimize API response times by leveraging Redis caching.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Results](#results)
- [Contributing](#contributing)
- [License](#license)

## Introduction

In this project, we explore the benefits of using Redis as a caching mechanism to improve the performance of API calls in an Express.js application. Redis is an in-memory data store that can significantly reduce the response time for frequently requested data by storing it in memory.

## Technologies Used

- Node.js: a JavaScript runtime for server-side applications.
- Express.js: a fast and minimalist web framework for Node.js.
- Redis: an in-memory data store used for caching.
- OOPs (Object-Oriented Programming) patterns in Node.js: for organizing and structuring the application code.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/your-username/express-redis-cache.git
cd express-redis-cache
```

2. Install the dependencies:

```
npm install
```

3. Set up Redis on your system or use a remote Redis server.

## Usage

Once you have installed the project and configured Redis, you can run the application using the following command:

```
npm start
```

This will start the Express server, and it will be accessible at `http://localhost:3000`.

The application defines a sample API endpoint at `/links`, which fetches data from an external API (`https://jsonplaceholder.typicode.com/users`). The first time you access this endpoint, it will fetch data from the external API and store it in the Redis cache. Subsequent requests to the same endpoint will be served directly from the cache, resulting in a significant reduction in response time.

## Results

After implementing Redis caching, the results showed a remarkable improvement in API response times. The initial API call took approximately 480ms, but after enabling Redis caching, the subsequent API calls were consistently served in just 17ms.

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please feel free to create an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy caching! 🚀
