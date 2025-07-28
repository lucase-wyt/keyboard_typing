import React, { useState, useEffect } from 'react';
import { useDatabase } from '../contexts/database';
import {
  PageContainer,
  PageTitle,
  FilterBar,
  Select,
  StatsGrid,
  StatCard,
  StatValue,
  StatLabel,
  StatChange,
  ChartContainer,
  ChartTitle,
  ProgressChart,
  ProgressBar,
  ChartLabel,
  RecordsTable,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  EmptyState,
} from '../components/styled-components/styled-page';
function StatisticsPage() {
  const { db, isInitialized } = useDatabase();
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [timeFilter, setTimeFilter] = useState('7'); // 7天, 30天, 90天, 全部
  const [stats, setStats] = useState({
    totalPractices: 0,
    averageWpm: 0,
    averageAccuracy: 0,
    totalTime: 0,
    bestWpm: 0,
    bestAccuracy: 0,
    improvementWpm: 0,
    improvementAccuracy: 0,
  });
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    if (isInitialized) {
      loadPracticeRecords();
    }
  }, [isInitialized]);

  useEffect(() => {
    filterRecords();
  }, [records, timeFilter]);

  useEffect(() => {
    calculateStats();
    generateProgressData();
  }, [filteredRecords]);

  const loadPracticeRecords = async () => {
    if (!db) return;

    try {
      const data = await db.getPracticeRecords(1000);
      setRecords(data);
      console.log('练习记录加载完成:', data);
    } catch (error) {
      console.error('加载练习记录失败:', error);
    }
  };

  const filterRecords = () => {
    if (timeFilter === 'all') {
      setFilteredRecords(records);
      return;
    }

    const days = parseInt(timeFilter);
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);

    const filtered = records.filter((record) => {
      const recordDate = new Date(record.date);
      return recordDate >= cutoffDate;
    });

    setFilteredRecords(filtered);
  };

  const calculateStats = () => {
    if (filteredRecords.length === 0) {
      setStats({
        totalPractices: 0,
        averageWpm: 0,
        averageAccuracy: 0,
        totalTime: 0,
        bestWpm: 0,
        bestAccuracy: 0,
        improvementWpm: 0,
        improvementAccuracy: 0,
      });
      return;
    }

    const totalPractices = filteredRecords.length;
    const totalWpm = filteredRecords.reduce(
      (sum, record) => sum + (record.wpm || 0),
      0,
    );
    const totalAccuracy = filteredRecords.reduce(
      (sum, record) => sum + (record.accuracy || 0),
      0,
    );
    const totalTime = filteredRecords.reduce(
      (sum, record) => sum + (record.timeElapsed || 0),
      0,
    );

    const averageWpm = Math.round(totalWpm / totalPractices);
    const averageAccuracy = Math.round(totalAccuracy / totalPractices);

    const bestWpm = Math.max(...filteredRecords.map((r) => r.wpm || 0));
    const bestAccuracy = Math.max(
      ...filteredRecords.map((r) => r.accuracy || 0),
    );

    // 计算进步幅度（最近几次与之前的对比）
    let improvementWpm = 0;
    let improvementAccuracy = 0;

    if (filteredRecords.length >= 6) {
      const recent = filteredRecords.slice(0, 3);
      const previous = filteredRecords.slice(3, 6);

      const recentAvgWpm = recent.reduce((sum, r) => sum + (r.wpm || 0), 0) / 3;
      const previousAvgWpm =
        previous.reduce((sum, r) => sum + (r.wpm || 0), 0) / 3;

      const recentAvgAcc =
        recent.reduce((sum, r) => sum + (r.accuracy || 0), 0) / 3;
      const previousAvgAcc =
        previous.reduce((sum, r) => sum + (r.accuracy || 0), 0) / 3;

      improvementWpm = Math.round(recentAvgWpm - previousAvgWpm);
      improvementAccuracy = Math.round(recentAvgAcc - previousAvgAcc);
    }

    setStats({
      totalPractices,
      averageWpm,
      averageAccuracy,
      totalTime: Math.round(totalTime / 60), // 转换为分钟
      bestWpm,
      bestAccuracy,
      improvementWpm,
      improvementAccuracy,
    });
  };

  const generateProgressData = () => {
    if (filteredRecords.length === 0) {
      setProgressData([]);
      return;
    }

    // 按日期分组统计
    const grouped = {};
    filteredRecords.forEach((record) => {
      const date = new Date(record.date).toLocaleDateString();
      if (!grouped[date]) {
        grouped[date] = { wpm: [], accuracy: [], count: 0 };
      }
      grouped[date].wpm.push(record.wpm || 0);
      grouped[date].accuracy.push(record.accuracy || 0);
      grouped[date].count++;
    });

    // 生成图表数据
    const data = Object.entries(grouped)
      .map(([date, values]) => ({
        date,
        avgWpm: Math.round(
          values.wpm.reduce((a, b) => a + b, 0) / values.wpm.length,
        ),
        avgAccuracy: Math.round(
          values.accuracy.reduce((a, b) => a + b, 0) / values.accuracy.length,
        ),
        count: values.count,
      }))
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(-10); // 最近10天

    setProgressData(data);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('zh-CN');
  };

  return (
    <PageContainer>
      <PageTitle>📊 统计分析</PageTitle>

      <FilterBar>
        <Select
          value={timeFilter}
          onChange={(e) => setTimeFilter(e.target.value)}
        >
          <option value="7">最近 7 天</option>
          <option value="30">最近 30 天</option>
          <option value="90">最近 90 天</option>
          <option value="all">全部时间</option>
        </Select>
      </FilterBar>

      <StatsGrid>
        <StatCard color="#667eea">
          <StatValue color="#667eea">{stats.totalPractices}</StatValue>
          <StatLabel>练习次数</StatLabel>
        </StatCard>

        <StatCard color="#26de81">
          <StatValue color="#26de81">{stats.averageWpm}</StatValue>
          <StatLabel>平均速度 (WPM)</StatLabel>
          {stats.improvementWpm !== 0 && (
            <StatChange positive={stats.improvementWpm > 0}>
              {stats.improvementWpm > 0 ? '+' : ''}
              {stats.improvementWpm} WPM
            </StatChange>
          )}
        </StatCard>

        <StatCard color="#ffa502">
          <StatValue color="#ffa502">{stats.averageAccuracy}%</StatValue>
          <StatLabel>平均准确率</StatLabel>
          {stats.improvementAccuracy !== 0 && (
            <StatChange positive={stats.improvementAccuracy > 0}>
              {stats.improvementAccuracy > 0 ? '+' : ''}
              {stats.improvementAccuracy}%
            </StatChange>
          )}
        </StatCard>

        <StatCard color="#ff6b6b">
          <StatValue color="#ff6b6b">{stats.totalTime}</StatValue>
          <StatLabel>练习时长 (分钟)</StatLabel>
        </StatCard>

        <StatCard color="#3742fa">
          <StatValue color="#3742fa">{stats.bestWpm}</StatValue>
          <StatLabel>最高速度 (WPM)</StatLabel>
        </StatCard>

        <StatCard color="#2ed573">
          <StatValue color="#2ed573">{stats.bestAccuracy}%</StatValue>
          <StatLabel>最高准确率</StatLabel>
        </StatCard>
      </StatsGrid>

      {progressData.length > 0 && (
        <ChartContainer>
          <ChartTitle>进步趋势 (最近10天平均WPM)</ChartTitle>
          <ProgressChart>
            {progressData.map((item, index) => {
              const maxWpm = Math.max(...progressData.map((d) => d.avgWpm));
              const height = maxWpm > 0 ? (item.avgWpm / maxWpm) * 100 : 20;

              return (
                <div key={index} style={{ flex: 1, textAlign: 'center' }}>
                  <ProgressBar height={height}>{item.avgWpm}</ProgressBar>
                  <ChartLabel>
                    {new Date(item.date).toLocaleDateString('zh-CN', {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </ChartLabel>
                </div>
              );
            })}
          </ProgressChart>
        </ChartContainer>
      )}

      <RecordsTable>
        <ChartTitle>最近练习记录</ChartTitle>
        {filteredRecords.length === 0 ? (
          <EmptyState>暂无练习记录</EmptyState>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <Table>
              <thead>
                <tr>
                  <TableHeader>日期时间</TableHeader>
                  <TableHeader>词库</TableHeader>
                  <TableHeader>速度 (WPM)</TableHeader>
                  <TableHeader>准确率</TableHeader>
                  <TableHeader>错误数</TableHeader>
                  <TableHeader>用时</TableHeader>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.slice(0, 20).map((record, index) => (
                  <TableRow key={index}>
                    <TableCell>{formatDate(record.date)}</TableCell>
                    <TableCell>{record.libraryId || '未知'}</TableCell>
                    <TableCell style={{ color: '#26de81', fontWeight: 'bold' }}>
                      {record.wpm || 0}
                    </TableCell>
                    <TableCell style={{ color: '#ffa502', fontWeight: 'bold' }}>
                      {record.accuracy || 0}%
                    </TableCell>
                    <TableCell style={{ color: '#ff6b6b' }}>
                      {record.errors || 0}
                    </TableCell>
                    <TableCell>{formatTime(record.timeElapsed || 0)}</TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </RecordsTable>
    </PageContainer>
  );
}

export default StatisticsPage;
