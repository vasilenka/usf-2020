import styles from './Matrix.module.scss'
import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import { useCalendarMatrix } from 'use-calendar-matrix'

import { getMonth, getYear, getDate, format, isSameMonth, addMonths } from 'date-fns'
// import { useCalendarMatrix } from '../../hooks'
import Box from '../../layouts/Box/Box'
import Text from '../../components/Text/Text'
import Container from '../../layouts/Container/Container'
import Section from '../../layouts/Section/Section'

const Matrix = ({ children, className, ...restProps }) => {
  let [month, setMonth] = useState(getMonth(Date.now()))
  let [year, setYear] = useState(getYear(Date.now()))
  let [date, setDate] = useState(new Date(year, month))

  useEffect(() => {
    setDate(new Date(year, month))
  }, [year, month])

  let [calendars] = useCalendarMatrix(year, month)

  return (
    <Section id="calendar-matrix">
      <Container>
        <Box alignCenter justifyBetween style={{ width: '100%', marginBottom: 48 }}>
          <Text heading5 as="p" onClick={() => setMonth(month - 1)}>
            PREV
          </Text>
          <Text as="h2" heading3>
            {format(date, 'MMMM yyyy')}
          </Text>
          <Text heading5 as="p" onClick={() => setMonth(month + 1)}>
            NEXT
          </Text>
        </Box>
        <main>
          {calendars.map((week, index) => (
            <Box key={`week--${index}`} alignBaseline justifyBetween>
              {week.map((day, index) => (
                <Box key={`day--${index}`} alignCenter justifyCenter style={{ flex: 1, height: 40 }}>
                  <Text heading5 secondary={!isSameMonth(day, date)}>
                    {getDate(day)}
                  </Text>
                </Box>
              ))}
            </Box>
          ))}
        </main>
      </Container>
    </Section>
  )
}

export default Matrix
