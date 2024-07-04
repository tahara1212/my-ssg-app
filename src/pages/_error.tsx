import React from 'react';
import { NextPage, NextPageContext } from 'next';

interface ErrorProps {
  statusCode: number | undefined;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <>
        {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;