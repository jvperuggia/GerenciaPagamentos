import { consultarUltimoPagamento, realizarPagamento } from '../src/gerenciarPagamentos.js';
import assert from 'node:assert';

describe('Testes do gerenciamento de pagamentos', function () {
    it('Validar a relização de um pamagento na categoria "Padrão" com sucesso', function () {
        //Arrange
        const pagamentoFuncao = realizarPagamento( 107008806, 'DevUp', 15.50)
        const codigo = 107008806
        const empresa = 'DevUp'
        const valor = 15.50

        //Asserts
        assert.equal(pagamentoFuncao.codigo, codigo);
        assert.equal(pagamentoFuncao.empresa, empresa);
        assert.equal(pagamentoFuncao.valor, valor);
         console.log('Novo Pagamento cadastrado com sucesso.')
         console.log('Categria: Padrão')
    });



    it('Validar a consulta do último pagamento com categoria "Cara".', function () {
        //Arrange
        const pagamentoFuncao = realizarPagamento(91300878, 'BoraKodar', 100.01);
        const ultimoPagamento = consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigo, 91300878);
        assert.equal(ultimoPagamento.empresa, 'BoraKodar');
        assert.equal(ultimoPagamento.valor, 100.01);
        
        console.log(ultimoPagamento)
    });

    it('Validar a consulta do último pagamento com categoria "Padrão".', function () {
        //Arrange
        const pagamentoFuncao = realizarPagamento(91300878, 'JaKodey', 100.00);
        const ultimoPagamento = consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigo, 91300878);
        assert.equal(ultimoPagamento.empresa, 'JaKodey');
        assert.equal(ultimoPagamento.valor, 100.00);
        
        console.log(ultimoPagamento)
    });
});    