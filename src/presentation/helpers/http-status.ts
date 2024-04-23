
"use strict";

/**
 * Hypertext Transfer Protocol (HTTP) response status codes.
 * @see {@link https://en.wikipedia.org/wiki/List_of_HTTP_status_codes}
 */
enum HttpStatusCode {

  // 2xx Success
  OK = 200,                   // The request has succeeded.
  CREATED = 201,              // The request has been fulfilled and resulted in a new resource being created.
  ACCEPTED = 202,             // The request has been accepted for processing, but the processing has not been completed.
  NO_CONTENT = 204,           // The server successfully processed the request and is not returning any content.

  // 4xx Client Errors
  BAD_REQUEST = 400,          // The server could not understand the request due to invalid syntax.
  UNAUTHORIZED = 401,         // The client must authenticate itself to get the requested response.
  FORBIDDEN = 403,            // The client does not have access rights to the content.
  NOT_FOUND = 404,            // The server can not find the requested resource.
  METHOD_NOT_ALLOWED = 405,   // The request method is not allowed for the requested resource.

  // 5xx Server Errors
  INTERNAL_SERVER_ERROR = 500,// The server has encountered a situation it doesn't know how to handle.
  SERVICE_UNAVAILABLE = 503,  // The server is not ready to handle the request.
}

export default HttpStatusCode;