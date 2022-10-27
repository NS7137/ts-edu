import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport, HtmlReport } from './reportTargets';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
// 重构 生成静态方法 在MatchReader中直接返回调用CsvFileReader的MatchReader
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();
const matches = matchReader.matches;

// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
// const summary = Summary.winsAnalysisWithHtmlReport('Man United');
// 同样 静态方法 在类中直接完成调用并返回Summary
const summary = Summary.winsAnalysisWithConsoleReport('Man United');
summary.buildAndPrintReport(matches);
