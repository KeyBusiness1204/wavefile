/*!
 * riffwave64
 * Read & write wave files with 8, 16, 24, 32 PCM, 32 IEEE & 64-bit data.
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * https://github.com/rochars/riffwave64
 * https://tr2099.github.io
 *
 */
 
var assert = require('assert');

describe('create 16-bit wave files from scratch', function() {
    
    let wavefile = require('../../index.js');
    let wav = new wavefile.WaveFile();
    wav.fromScratch(1, 48000, '16', [0, 1, -32768, 32767]);

    let fs = require('fs');
    fs.writeFileSync("./test/files/out/16-bit-48kHz-mono-fromScratch.wav", wav.toBytes());

    it('chunkId should be "RIFF"', function() {
        assert.equal(wav.chunkId, "RIFF");
    });

    it('format should be "WAVE"', function() {
        assert.equal(wav.format, "WAVE");
    });

    it('subChunk1Id should be "fmt "', function() {
        assert.equal(wav.subChunk1Id, "fmt ");
    });

    it('subChunk1Size should be 16', function() {
        assert.equal(wav.subChunk1Size, 16);
    });

    it('audioFormat should be 1', function() {
        assert.equal(wav.audioFormat, 1);
    });

    it('numChannels should be 1', function() {
        assert.equal(wav.numChannels, 1);
    });

    it('sampleRate should be 48000', function() {
        assert.equal(wav.sampleRate, 48000);
    });

    it('byteRate should be 96000', function() {
        assert.equal(wav.byteRate, 96000);
    });

    it('blockAlign should be 2', function() {
        assert.equal(wav.blockAlign, 2);
    });

    it('bitsPerSample should be 16', function() {
        assert.equal(wav.bitsPerSample, 16);
    });

    it('subChunk2Id should be "data"', function() {
        assert.equal(wav.subChunk2Id, "data");
    });

    it('subChunk2Size should be 8', function() {
        assert.equal(wav.subChunk2Size, 8);
    });

    it('samples_ should be the same as the args', function() {
        assert.deepEqual(wav.samples_, [0, 1, -32768, 32767]);
    });

    it('bitDepth_ should be "16"', function() {
        assert.equal(wav.bitDepth_, "16");
    });

    /*
    it('should return a 16-bit wave file', function() {
        let wav = rw64.writeWavBytes(1, 48000, '16',
            [0, 1, -32768, 32767]);
        let wavRead = rw64.readWavBytes(wav);
        
        assert.equal(wavRead.audioFormat, 1);
        assert.equal(wavRead.numChannels, 1);
        assert.equal(wavRead.blockAlign, 2);
        assert.equal(wavRead.sampleRate, 48000);
        assert.equal(wavRead.bitsPerSample, 16);
        assert.deepEqual(wavRead.samples, [0, 1, -32768, 32767]);
    });

    it('should return a 16-bit wave file with a odd number of samples',
            function() {
        let wav = rw64.writeWavBytes(1, 48000, '16',
            [0, 1, -32768, 32767, 4]);
        let wavRead = rw64.readWavBytes(wav);
        
        assert.equal(wavRead.audioFormat, 1);
        assert.equal(wavRead.numChannels, 1);
        assert.equal(wavRead.blockAlign, 2);
        assert.equal(wavRead.sampleRate, 48000);
        assert.equal(wavRead.bitsPerSample, 16);
        assert.deepEqual(wavRead.samples, [0, 1, -32768, 32767, 4]);
    });

    it('should write a 16-bit stereo wav file', function() {
        let channels = [
            [0,1,2],
            [0,1,2]
        ];
        let samples = rw64.interleave(channels);
        let wav = rw64.writeWavBytes(2, 44100, '16', samples);
        let read = rw64.readWavBytes(wav);
        
        assert.equal(read.subChunk1Size, 16);
        assert.equal(read.audioFormat, 1);
        assert.equal(read.numChannels, 2);
        assert.equal(read.sampleRate, 44100);
        assert.equal(read.blockAlign, 4);
        assert.equal(read.bitsPerSample, 16);
    });
    */
});
