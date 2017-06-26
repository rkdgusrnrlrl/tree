/**
 * Created by dakbutfly on 2017-06-26.
 */
var chai = require("chai");
var expect = chai.expect;
function subStrParent(str, lastIdx) {
    var last = lastIdx || str.length;
    var idx = str.lastIndexOf(";;", last);
    return str.substring(0, idx + 2);
}
describe('getParentTeamName TEST', function() {
    it('should be true', function() {
        expect(true).to.be.true;
    });
    function getParentTeamName(teamFull) {

        var tempTeamName = teamFull;
        if (teamFull.length < 5) return;
        if (teamFull.lastIndexOf(";;") === -1) return;
        if (teamFull.lastIndexOf(";;") < teamFull.length ) tempTeamName = subStrParent(teamFull);

        if (tempTeamName.lastIndexOf(";;", tempTeamName.length -3) > 1) {
            return subStrParent(tempTeamName, tempTeamName.length -3);
        }
        return "root";
    }

    it('getParentTeamName test1', function () {
        var str = ";;회사명;;";
        expect(getParentTeamName(str)).to.be.equal("root");
    });

    it('getParentTeamName test2', function () {
        var str = "";
        expect(getParentTeamName(str)).to.a("undefined");
    });

    it('getParentTeamName test3', function () {
        var str = "aaa";
        expect(getParentTeamName(str)).to.a("undefined");
    });

    it('getParentTeamName test4', function () {
        var str = ";;";
        expect(getParentTeamName(str)).to.a("undefined");
    });

    it('getParentTeamName test5', function () {
        var str = ";;회사명;;사업자";
        expect(getParentTeamName(str)).to.be.equal("root");
    });

    it('getParentTeamName test6', function () {
        var str = ";;회사명;;사업자1;;";
        expect(getParentTeamName(str)).to.be.equal(";;회사명;;");
    });

    it('getParentTeamName test7', function () {
        var str = ";;회사명;;사업자1;;후원";
        expect(getParentTeamName(str)).to.be.equal(";;회사명;;");
    });

    it('getParentTeamName test8', function () {
        var str = ";;회사명;;사업자1;;후원;;";
        expect(getParentTeamName(str)).to.be.equal(";;회사명;;사업자1;;");
    });
});

describe('getTeamName TEST', function() {

    function getTeamName(teamFull) {

        var tempTeamName = teamFull;

        if (teamFull.lastIndexOf(";;") === -1) return;
        if (teamFull.lastIndexOf(";;") < teamFull.length ) tempTeamName = subStrParent(teamFull);
        var idx = tempTeamName.lastIndexOf(";;", tempTeamName.length - 3);
        return tempTeamName.substring(idx, tempTeamName.length).replace(/;;/g, "");
    }

    it('getTeamName test1', function () {
        var str = "";
        expect(getTeamName(str)).to.a("undefined");
    });

    it('getTeamName test2', function () {
        var str = "안녕";
        expect(getTeamName(str)).to.a("undefined");
    });

    it('getTeamName test3', function () {
        var str = ";;안녕;;";
        expect(getTeamName(str)).to.equal("안녕");
    });

    it('getTeamName test4', function () {
        var str = ";;안녕;;하세요";
        expect(getTeamName(str)).to.equal("안녕");
    });

    it('getTeamName test5', function () {
        var str = ";;안녕;;하세요;;";
        expect(getTeamName(str)).to.equal("하세요");
    });

    it('getTeamName test6', function () {
        var str = ";;안녕;;하세요;;오오오오";
        expect(getTeamName(str)).to.equal("하세요");
    });

    it('getTeamName test7', function () {
        var str = ";;안녕;;하세요;;오오오오;;";
        expect(getTeamName(str)).to.equal("오오오오");
    });


});
