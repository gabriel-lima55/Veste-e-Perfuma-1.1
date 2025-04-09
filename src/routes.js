// src/routes.js
const db = require('./db');
const url = require('url');

function handleRequest(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'GET' && pathname === '/produtos') {
    db.all('SELECT * FROM produtos', (err, rows) => {
      if (err) {
        res.statusCode = 500;
        res.end(JSON.stringify({ erro: err.message }));
      } else {
        res.end(JSON.stringify(rows));
      }
    });

  } else if (req.method === 'POST' && pathname === '/produtos') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const { nome, preco } = JSON.parse(body);
      db.run('INSERT INTO produtos (nome, preco) VALUES (?, ?)', [nome, preco], function(err) {
        if (err) {
          res.statusCode = 500;
          res.end(JSON.stringify({ erro: err.message }));
        } else {
          res.end(JSON.stringify({ id: this.lastID }));
        }
      });
    });

  } else if (req.method === 'PUT' && pathname === '/produtos') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const { id, nome, preco } = JSON.parse(body);
      db.run('UPDATE produtos SET nome = ?, preco = ? WHERE id = ?', [nome, preco, id], function(err) {
        if (err) {
          res.statusCode = 500;
          res.end(JSON.stringify({ erro: err.message }));
        } else {
          res.end(JSON.stringify({ atualizado: this.changes }));
        }
      });
    });

  } else if (req.method === 'DELETE' && pathname === '/produtos') {
    const { id } = query;
    db.run('DELETE FROM produtos WHERE id = ?', [id], function(err) {
      if (err) {
        res.statusCode = 500;
        res.end(JSON.stringify({ erro: err.message }));
      } else {
        res.end(JSON.stringify({ deletado: this.changes }));
      }
    });

  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ erro: 'Rota não encontrada' }));
  }
}

module.exports = handleRequest;
