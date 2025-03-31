import React from 'react'
import Table from '../atoms/Table/Table'
import Thead from '../atoms/Table/Thead'
import Tr from '../atoms/Table/Tr'
import Th from '../atoms/Table/Th'
import Tbody from '../atoms/Table/Tbody'
import Td from '../atoms/Table/Td'

const ExerciseTable = () => {
  return (
    <Table>
        <Thead>
            <Tr>
                <Th>Serie</Th>
                <Th>Kg</Th>
                <Th>Repeticiones</Th>
            </Tr>
        </Thead>
        <Tbody>
            <Tr>
                <Td>1</Td>
                <Td>30</Td>
                <Td>10</Td>
            </Tr>
            <Tr>
                <Td>1</Td>
                <Td>30</Td>
                <Td>10</Td>
            </Tr>
        </Tbody>
    </Table>
  )
}

export default ExerciseTable