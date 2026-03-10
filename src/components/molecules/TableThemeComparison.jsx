import { Table } from '../../molecules/Table/Table';

const titleStyle = {
  fontSize: '11px',
  fontWeight: 500,
  color: 'var(--ink-3)',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  marginBottom: '12px',
};

const panelStyle = {
  padding: '20px',
  background: 'var(--color-bg-theme-panel)',
  borderRadius: '10px',
  border: '1px solid var(--color-border-default)',
};

const labelStyle = {
  fontSize: '10px',
  color: 'var(--color-text-secondary)',
  marginBottom: '12px',
  fontWeight: 500,
};

const sampleData = [
  { name: 'Alice Johnson', subject: 'Mathematics', score: 95, grade: 'A+' },
  { name: 'Bob Smith', subject: 'Physics', score: 87, grade: 'A' },
  { name: 'Carol Davis', subject: 'Chemistry', score: 72, grade: 'B' },
  { name: 'Dan Wilson', subject: 'Biology', score: 91, grade: 'A' },
];

function ThemeTable() {
  return (
    <Table hoverable>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Subject</Table.Head>
          <Table.Head align="right">Score</Table.Head>
          <Table.Head align="center">Grade</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sampleData.map((row) => (
          <Table.Row key={row.name}>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.subject}</Table.Cell>
            <Table.Cell align="right">{row.score}</Table.Cell>
            <Table.Cell align="center">{row.grade}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export function TableThemeComparison() {
  return (
    <div>
      <div style={titleStyle}>Theme Comparison</div>
      <div className="theme-comparison">
        <div data-theme="light" style={panelStyle}>
          <div style={labelStyle}>LIGHT</div>
          <ThemeTable />
        </div>
        <div data-theme="dark" style={panelStyle}>
          <div style={labelStyle}>DARK</div>
          <ThemeTable />
        </div>
      </div>
    </div>
  );
}
