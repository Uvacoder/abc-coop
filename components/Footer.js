import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <div className="large-container p-4 sm:py-16 py-8 flex sm:justify-between flex-col sm:flex-row sm:items-center items-start space-y-2 sm:space-y-0">
      <div className="flex sm:space-x-8 sm:items-center items-start flex-col sm:flex-row sm:space-y-0 space-y-4">
        <Logo />
        <a
          href=""
          className="text-gray-500 hover:text-blue-500 hover:font-semibold pl-2 sm:pl-0"
        >
          Começar
        </a>
        <a
          href=""
          className="text-gray-500 hover:text-blue-500 hover:font-semibold pl-2 sm:pl-0"
        >
          Change-log
        </a>
      </div>
      <div className="flex sm:space-x-8 flex-col sm:flex-row items-start space-y-2 sm:space-y-0">
        <a
          href=""
          className="p-2 hover:bg-gray-100 dark:hover:bg-blackish2 text-gray-900 dark:text-gray-500 hover:text-blue-700 dark:hover:text-blue-500 rounded-md transition-all flex space-x-3 items-center"
        >
          <svg
            className="w-3 h-3 fill-current"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Google icon</title>
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
          </svg>
          <p>Google Play</p>
        </a>
        <a
          href="https://github.com/danilo-leal/coop.io"
          className="p-2 hover:bg-gray-100 dark:hover:bg-blackish2 text-gray-900 dark:text-gray-500 hover:text-blue-700 dark:hover:text-blue-500 rounded-md transition-all flex space-x-3 items-center"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 fill-current"
          >
            <title>GitHub icon</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          <p>GitHub</p>
        </a>
      </div>
    </div>
  );
}
