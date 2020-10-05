const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.should();
chai.use(chaiHttp);

const validPage = () => {
  describe('/recipes?i=ingredient - 200', () => {
    it('GET onion recipes', (done) => {
      chai.request(server)
        .get('/recipes/?i=onions')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
};

const validPageWithThreeIngredients = () => {
  describe('/recipes?i=1,2,3 - 200', () => {
    it('GET recipes with onions, carrot and tomato as ingredients', (done) => {
      chai.request(server)
        .get('/recipes/?i=onions,carrot,tomato')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
};

const validPageWithoutIngredients = () => {
  describe('/recipes -422', () => {
    it('HTTP CODE 422 for not sending ingredients', (done) => {
      chai.request(server).get('/recipes').end((err, res) => {
        res.should.have.status(422);
        done();
      });
    });
  });
};

const validPageManyIngredients = () => {
  describe('/recipes?i=1,2,3,4 -422', () => {
    it('HTTP CODE 422 for sending more than 3 ingredients', (done) => {
      chai.request(server).get('/recipes/?i=onion,tomato,cheese,farofa').end((err, res) => {
        res.should.have.status(422);
        done();
      });
    });
  });
};

const InvalidPage = () => {
  describe('/pizza -422', () => {
    it('HTTP CODE 404', (done) => {
      chai.request(server).get('/pizza').end((err, res) => {
        res.should.have.status(404);
        done();
      });
    });
  });
};

module.exports = {
  validPage,
  validPageWithThreeIngredients,
  validPageWithoutIngredients,
  validPageManyIngredients,
  InvalidPage,
};
