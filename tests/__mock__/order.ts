import { Side, Server } from '../../src/types'
import { zeroExConfig } from './config'
import { FEE_RECIPIENT } from '../../src/constants'
export const orders = [
  {
    signedOrder: {
      exchangeContractAddress: '0x90fe2af704b34e0224bf2299c838e04d4dcf1364',
      maker: '0x20f0c6e79a763e1fe83de1fbf08279aa3953fb5f',
      taker: '0x0000000000000000000000000000000000000000',
      makerTokenAddress: '0xf26085682797370769bbb4391a0ed05510d9029d',
      takerTokenAddress: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
      feeRecipient: FEE_RECIPIENT,
      makerTokenAmount: '10000000000000000',
      takerTokenAmount: '1940000000000',
      makerFee: '0',
      takerFee: '0',
      expirationUnixTimestampSec: '1549361646',
      salt: '42214642756128894000000000000000000000000000000000000000000000000000000000000',
      ecSignature: {
        v: 28,
        r: '0x60dcd418568f7fa56104fb6c9ac66eeb6443994a082eeebf8376ebd400430b78',
        s: '0x06dbdf8b6b92c93e96b79c5fafe70f3caff21b338efc1ad00ec7025120ea4841',
      },
    },
    simpleOrder: {
      side: 'SELL' as Side,
      base: 'SNT',
      quote: 'WETH',
      amount: 0.01,
      price: 0.000194,
      expirationUnixTimestampSec: 1549361646,
    },
    fillTakerTokenAmount: 1940000000000,
    shouldThrowOnInsufficientBalanceOrAllowance: false,
    encodedData: '0xbc61394a00000000000000000000000020f0c6e79a763e1fe83de1fbf08279aa3953fb5f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f26085682797370769bbb4391a0ed05510d9029d000000000000000000000000d0a1e359811322d97991e03f863a0c30c2cf029c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002386f26fc10000000000000000000000000000000000000000000000000000000001c3b102c80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005c5961ee5d54a41d99debc3a2dbb9898bb066541059be337488023d5e000000000000000000000000000000000000000000000000000000000000000000001c3b102c8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001c60dcd418568f7fa56104fb6c9ac66eeb6443994a082eeebf8376ebd400430b7806dbdf8b6b92c93e96b79c5fafe70f3caff21b338efc1ad00ec7025120ea4841',
  },
]

export const orderBook = {
  bids: [
    {
      orderId: 359828,
      protocol: '0x',
      rate: 0.000255,
      amountRemaining: '0.00000000473965',
      tradeType: 'bid' as Server.tradeType,
      payload: {
        exchangeContractAddress: '0x90fe2af704b34e0224bf2299c838e04d4dcf1364',
        maker: '0x75eb52e0265b80d5eac78e714b85ea9e199013aa',
        taker: '0x0000000000000000000000000000000000000000',
        makerTokenAddress: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
        takerTokenAddress: '0xf26085682797370769bbb4391a0ed05510d9029d',
        feeRecipient: '0x0000000000000000000000000000000000000000',
        makerTokenAmount: '25500000000000000',
        takerTokenAmount: '100000000000000000000',
        makerFee: '0',
        takerFee: '0',
        expirationUnixTimestampSec: '1551342565',
        salt: '76669967321507220000000000000000000000000000000000000000000000000000000000000',
        ecSignature: {
          v: 27,
          r: '0x8afe8a8e4f7d18b65ae8e28ded6dcea22a80b7997b73d75d93b4b04a4dcca3e9',
          s: '0x5abe9f4928b0b9ad1e46083c406adbfd9441897e39ab2eb82869653a39e2d5ab',
        },
      },
    },
    {
      orderId: 373059,
      protocol: '0x',
      rate: 0.00019,
      amountRemaining: '1.27437233',
      tradeType: 'bid' as Server.tradeType,
      payload: {
        exchangeContractAddress: '0x90fe2af704b34e0224bf2299c838e04d4dcf1364',
        maker: '0xa8050208f9b869820fcdcc5dbe0505bfa4913e21',
        taker: '0x0000000000000000000000000000000000000000',
        makerTokenAddress: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
        takerTokenAddress: '0xf26085682797370769bbb4391a0ed05510d9029d',
        feeRecipient: '0x0000000000000000000000000000000000000000',
        makerTokenAmount: '242130000000000',
        takerTokenAmount: '1274372330000000000',
        makerFee: '0',
        takerFee: '0',
        expirationUnixTimestampSec: '1553005325',
        salt: '86700055187767680000000000000000000000000000000000000000000000000000000000000',
        ecSignature: {
          v: 28,
          r: '0x63febf6d9442770990ba0c9fcfc7ca59895ee696eb686e70ab9e3fc91e0dd553',
          s: '0x5887b1bdc687da14f5b391ae6f81e26976f2172b5ef766b95bdb2f5a7e733f42',
        },
      },
    },
    {
      orderId: 380463,
      protocol: '0x',
      rate: 0.00020908,
      amountRemaining: '30',
      tradeType: 'bid' as Server.tradeType,
      payload: {
        exchangeContractAddress: '0x90fe2af704b34e0224bf2299c838e04d4dcf1364',
        maker: '0xcd986f1b0942b25537585b79f4a53b109064334f',
        taker: '0x0000000000000000000000000000000000000000',
        makerTokenAddress: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
        takerTokenAddress: '0xf26085682797370769bbb4391a0ed05510d9029d',
        feeRecipient: '0x0000000000000000000000000000000000000000',
        makerTokenAmount: '6272400000000000',
        takerTokenAmount: '30000000000000000000',
        makerFee: '0',
        takerFee: '0',
        expirationUnixTimestampSec: '1553068696',
        salt: '41919574519780110000000000000000000000000000000000000000000000000000000000000',
        ecSignature: {
          v: 28,
          r: '0x0e50e54c752cb64e554e66b634cd19b236fda524850040947b6a678ea50dc5e9',
          s: '0x488c9f4ee7f3dae3edfcd327e28395d446b106efe3466ba99e2fe7ab82705167',
        },
      },
    },
  ],
  asks: [
    {
      orderId: 453020,
      protocol: '0x',
      rate: 0.00025575,
      amountRemaining: '74.57846494',
      tradeType: 'ask' as Server.tradeType,
      payload: {
        exchangeContractAddress: '0x90fe2af704b34e0224bf2299c838e04d4dcf1364',
        maker: '0x20f0c6e79a763e1fe83de1fbf08279aa3953fb5f',
        taker: '0x0000000000000000000000000000000000000000',
        makerTokenAddress: '0xf26085682797370769bbb4391a0ed05510d9029d',
        takerTokenAddress: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
        feeRecipient: '0x0000000000000000000000000000000000000000',
        makerTokenAmount: '74578464940000000000',
        takerTokenAmount: '19073440000000000',
        makerFee: '0',
        takerFee: '0',
        expirationUnixTimestampSec: '1553600026',
        salt: '32147202111500004000000000000000000000000000000000000000000000000000000000000',
        ecSignature: {
          v: 27,
          r: '0xd02e3bb746a9af70eaf0472685520d8a973ffcce15d74c22b9acc4de4984c1b6',
          s: '0x141096b647077ce6d3be4cc26ed1089e7b2f375a57639380b7c0128e81833c65',
        },
      },
    },
  ],
}