const fs = require('fs').promises;
const http = require('http');

const routes = {
    '/': 'html/website.html',
    '/home': 'html/website.html',
    '/about': 'html/about.html',
    '/services': 'html/services.html',
    '/contact': 'html/contact.html',
    '/website.css': 'css/website.css'
};

const contentTypes = {
    '.html': 'text/html',
    '.css': 'text/css'
};

const getContentType = (url) => {
    if (url.endsWith('.css')) return contentTypes['.css'];
    return contentTypes['.html'];
};

const getFilePath = (url) => routes[url] || null;

const server = http.createServer(async (req, resp) => {
    const filePath = getFilePath(req.url);

    if (!filePath) {
        resp.writeHead(404, { 'content-type': 'text/plain' });
        resp.end('Page not found');
        return;
    }

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        resp.writeHead(200, { 'content-type': getContentType(req.url) });
        resp.end(data);
    } catch (error) {
        resp.writeHead(500, { 'content-type': 'text/plain' });
        resp.end('Internal server error');
    }
});

server.listen(3200, () => {
    console.log('Server running on http://localhost:3200');
});
