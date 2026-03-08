import { useState } from 'react';
import { Table } from '../../molecules/Table/Table';

const sampleData = [
  { name: 'Alice Johnson', subject: 'Mathematics', score: 95, grade: 'A+' },
  { name: 'Bob Smith', subject: 'Physics', score: 87, grade: 'A' },
  { name: 'Carol Davis', subject: 'Chemistry', score: 72, grade: 'B' },
  { name: 'Dan Wilson', subject: 'Biology', score: 91, grade: 'A' },
  { name: 'Eva Brown', subject: 'English', score: 68, grade: 'C+' },
];

function Card({ label, children, style }) {
  return (
    <div style={{
      background: 'var(--card-bg)',
      borderRadius: '12px',
      border: '1px solid var(--rule)',
      boxShadow: '0 1px 3px rgba(26,24,22,0.04), 0 4px 12px rgba(26,24,22,0.02)',
      padding: '24px',
      ...style,
    }}>
      {label && (
        <div style={{
          display: 'inline-block',
          fontSize: '10px',
          fontWeight: 600,
          fontFamily: 'var(--mono)',
          color: 'var(--ink-3)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '16px',
          background: 'var(--page-bg)',
          padding: '3px 8px',
          borderRadius: '4px',
          border: '1px solid var(--rule)',
        }}>{label}</div>
      )}
      {children}
    </div>
  );
}

export function TableShowcase() {
  const [sortCol, setSortCol] = useState('name');
  const [sortDir, setSortDir] = useState('asc');

  const sorted = [...sampleData].sort((a, b) => {
    const v = sortDir === 'asc' ? 1 : -1;
    if (sortCol === 'score') return (a.score - b.score) * v;
    return a[sortCol].localeCompare(b[sortCol]) * v;
  });

  function handleSort(col) {
    if (sortCol === col) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortCol(col);
      setSortDir('asc');
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Sizes */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {['sm', 'md', 'lg'].map((size) => (
          <Card key={size} label={size} style={{ flex: '1 1 280px', minWidth: 0 }}>
            <Table size={size}>
              <Table.Header>
                <Table.Row>
                  <Table.Head>Name</Table.Head>
                  <Table.Head>Subject</Table.Head>
                  <Table.Head align="right">Score</Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {sampleData.slice(0, 3).map((row) => (
                  <Table.Row key={row.name}>
                    <Table.Cell>{row.name}</Table.Cell>
                    <Table.Cell>{row.subject}</Table.Cell>
                    <Table.Cell align="right">{row.score}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Card>
        ))}
      </div>

      {/* Variants */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '1rem' }}>
        <Card label="Simple">
          <Table variant="simple">
            <Table.Header>
              <Table.Row>
                <Table.Head>Name</Table.Head>
                <Table.Head>Subject</Table.Head>
                <Table.Head align="right">Score</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {sampleData.map((row) => (
                <Table.Row key={row.name}>
                  <Table.Cell>{row.name}</Table.Cell>
                  <Table.Cell>{row.subject}</Table.Cell>
                  <Table.Cell align="right">{row.score}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Card>
        <Card label="Striped">
          <Table variant="striped">
            <Table.Header>
              <Table.Row>
                <Table.Head>Name</Table.Head>
                <Table.Head>Subject</Table.Head>
                <Table.Head align="right">Score</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {sampleData.map((row) => (
                <Table.Row key={row.name}>
                  <Table.Cell>{row.name}</Table.Cell>
                  <Table.Cell>{row.subject}</Table.Cell>
                  <Table.Cell align="right">{row.score}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Card>
      </div>

      {/* Hoverable */}
      <Card label="Hoverable">
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
      </Card>

      {/* Bordered */}
      <Card label="Bordered">
        <Table bordered>
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
      </Card>

      {/* Sticky Header */}
      <Card label="Sticky header">
        <div style={{ height: '220px', overflow: 'auto', borderRadius: '8px', border: '1px solid var(--rule)' }}>
          <Table>
            <Table.Header sticky>
              <Table.Row>
                <Table.Head>Name</Table.Head>
                <Table.Head>Subject</Table.Head>
                <Table.Head align="right">Score</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {[...sampleData, ...sampleData, ...sampleData].map((row, i) => (
                <Table.Row key={i}>
                  <Table.Cell>{row.name}</Table.Cell>
                  <Table.Cell>{row.subject}</Table.Cell>
                  <Table.Cell align="right">{row.score}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </Card>

      {/* Sortable Headers */}
      <Card label="Sortable headers">
        <Table hoverable>
          <Table.Header>
            <Table.Row>
              <Table.Head
                sortable
                sortDirection={sortCol === 'name' ? sortDir : 'none'}
                onSort={() => handleSort('name')}
              >
                Name
              </Table.Head>
              <Table.Head
                sortable
                sortDirection={sortCol === 'subject' ? sortDir : 'none'}
                onSort={() => handleSort('subject')}
              >
                Subject
              </Table.Head>
              <Table.Head
                sortable
                sortDirection={sortCol === 'score' ? sortDir : 'none'}
                onSort={() => handleSort('score')}
                align="right"
              >
                Score
              </Table.Head>
              <Table.Head align="center">Grade</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sorted.map((row, i) => (
              <Table.Row key={i}>
                <Table.Cell>{row.name}</Table.Cell>
                <Table.Cell>{row.subject}</Table.Cell>
                <Table.Cell align="right">{row.score}</Table.Cell>
                <Table.Cell align="center">{row.grade}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>

      {/* With Footer and Caption */}
      <Card label="Footer & Caption">
        <Table variant="striped">
          <Table.Caption>Student grades for Q1 2026</Table.Caption>
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
          <Table.Footer>
            <Table.Row>
              <Table.Cell>Average</Table.Cell>
              <Table.Cell />
              <Table.Cell align="right">82.6</Table.Cell>
              <Table.Cell align="center">B+</Table.Cell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Card>

      {/* Theme Comparison */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
        <div data-theme="light" style={{
          padding: '24px',
          background: 'var(--color-bg-primary)',
          borderRadius: '12px',
          border: '1px solid var(--rule)',
          boxShadow: '0 1px 3px rgba(26,24,22,0.04), 0 4px 12px rgba(26,24,22,0.02)',
        }}>
          <div style={{
            display: 'inline-block',
            fontSize: '10px',
            fontWeight: 600,
            fontFamily: 'var(--mono)',
            color: 'var(--ink-3)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '16px',
            background: 'var(--page-bg)',
            padding: '3px 8px',
            borderRadius: '4px',
            border: '1px solid var(--rule)',
          }}>Light</div>
          <Table size="sm" variant="striped" hoverable>
            <Table.Header>
              <Table.Row>
                <Table.Head>Name</Table.Head>
                <Table.Head align="right">Score</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {sampleData.slice(0, 3).map((row) => (
                <Table.Row key={row.name}>
                  <Table.Cell>{row.name}</Table.Cell>
                  <Table.Cell align="right">{row.score}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
        <div data-theme="dark" style={{
          padding: '24px',
          background: 'var(--color-bg-primary)',
          borderRadius: '12px',
          border: '1px solid var(--color-border-default)',
        }}>
          <div style={{
            display: 'inline-block',
            fontSize: '10px',
            fontWeight: 600,
            fontFamily: 'var(--mono)',
            color: 'var(--color-text-tertiary)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '16px',
            padding: '3px 8px',
            borderRadius: '4px',
            border: '1px solid var(--color-border-default)',
          }}>Dark</div>
          <Table size="sm" variant="striped" hoverable>
            <Table.Header>
              <Table.Row>
                <Table.Head>Name</Table.Head>
                <Table.Head align="right">Score</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {sampleData.slice(0, 3).map((row) => (
                <Table.Row key={row.name}>
                  <Table.Cell>{row.name}</Table.Cell>
                  <Table.Cell align="right">{row.score}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
}
