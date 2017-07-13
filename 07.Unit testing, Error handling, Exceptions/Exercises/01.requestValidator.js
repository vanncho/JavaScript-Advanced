function validateRequest(object) {
    
    let methodRgx = new RegExp(/^(GET|POST|DELETE|CONNECT)$/);

    if (!object.hasOwnProperty('method') || !methodRgx.test(object.method)) {

        throw new Error('Invalid request header: Invalid Method');
    }

    let uriRgx = new RegExp(/^([\w.]+|\*)$/);

    if (!object.hasOwnProperty('uri') || !uriRgx.test(object.uri)) {

        throw new Error('Invalid request header: Invalid URI');
    }

    if (!object.hasOwnProperty('version') ||
        object.version !== 'HTTP/0.9' &&
        object.version !== 'HTTP/1.0' &&
        object.version !== 'HTTP/1.1' &&
        object.version !== 'HTTP/2.0') {

        throw new Error('Invalid request header: Invalid Version');
    }

    if (!object.hasOwnProperty('message') ||
    object.message.indexOf('<') >= 0 ||
    object.message.indexOf('>') >= 0 ||
    object.message.indexOf('\\') >= 0 ||
    object.message.indexOf('&') >= 0 ||
    object.message.indexOf('\'') >= 0 ||
    object.message.indexOf('"') >= 0) {

        throw new Error('Invalid request header: Invalid Message');
    }

    return object;
}

// validateRequest({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// });

validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'asl<pls'
});