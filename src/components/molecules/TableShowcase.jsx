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
      borderRadius: 'var(--radius-200)',
      border: 'var(--border-width-100) solid var(--rule)',
      boxShadow: '0 var(--size-04) var(--size-12) rgba(26,24,22,0.04), 0 var(--size-08) var(--size-24) rgba(26,24,22,0.02)',
      padding: 'var(--space-300)',
      ...style,
    }}>
      {label && (
        <div style={{
          display: 'inline-block',
          fontSize: 'var(--font-size-100)',
          fontWeight: 600,
          fontFamily: 'var(--mono)',
          color: 'var(--ink-3)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: 'var(--space-200)',
          background: 'var(--page-bg)',
          padding: 'var(--space-025) var(--space-100)',
          borderRadius: 'var(--radius-100)',
          border: 'var(--border-width-100) solid var(--rule)',
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-400)' }}>
      {/* Sizes */}
      <div style={{ display: 'flex', gap: 'var(--space-200)', flexWrap: 'wrap' }}>
        {['sm', 'md', 'lg'].map((size) => (
          <Card
            key={size}
            label={size}
            style={{ flex: '1 1 calc(17.5 * var(--space-200))', minWidth: 0 }}
          >
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
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(calc(23.75 * var(--space-200)), 1fr))',
          gap: 'var(--space-200)',
        }}
      >
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
        <div
          style={{
            height: 'calc(13.75 * var(--space-200))',
            overflow: 'auto',
            borderRadius: 'var(--radius-150)',
            border: 'var(--border-width-100) solid var(--rule)',
          }}
        >
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
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(calc(20 * var(--space-200)), 1fr))',
          gap: 'var(--space-200)',
        }}
      >
        <div data-theme="light" style={{
          padding: 'var(--space-300)',
          background: 'var(--color-bg-theme-panel)',
          borderRadius: 'var(--radius-200)',
          border: 'var(--border-width-100) solid var(--rule)',
          boxShadow: '0 var(--size-04) var(--size-12) rgba(26,24,22,0.04), 0 var(--size-08) var(--size-24) rgba(26,24,22,0.02)',
        }}>
          <div style={{
            display: 'inline-block',
            fontSize: 'var(--font-size-100)',
            fontWeight: 600,
            fontFamily: 'var(--mono)',
            color: 'var(--ink-3)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: 'var(--space-200)',
            background: 'var(--page-bg)',
            padding: 'var(--space-025) var(--space-100)',
            borderRadius: 'var(--radius-100)',
            border: 'var(--border-width-100) solid var(--rule)',
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
          padding: 'var(--space-300)',
          background: 'var(--color-bg-theme-panel)',
          borderRadius: 'var(--radius-200)',
          border: 'var(--border-width-100) solid var(--color-border-default)',
        }}>
          <div style={{
            display: 'inline-block',
            fontSize: 'var(--font-size-100)',
            fontWeight: 600,
            fontFamily: 'var(--mono)',
            color: 'var(--color-text-tertiary)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: 'var(--space-200)',
            padding: 'var(--space-025) var(--space-100)',
            borderRadius: 'var(--radius-100)',
            border: 'var(--border-width-100) solid var(--color-border-default)',
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
