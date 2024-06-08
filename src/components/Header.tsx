import { HamburgerIcon } from "@chakra-ui/icons"
import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack } from "@chakra-ui/react"


export default function Header() {
  return <Box
    as="nav"
    w="100%"
  >
    <Flex justifyContent="space-between" alignItems="center" minH='8vh'>
      <Box>
        <Stack direction='row' pl={8}>
          <Box>Free domotic</Box>
        </Stack>
      </Box>
      <Box alignSelf="right" display="flex" flexDirection="row" alignItems="center">
        <Box>Pablo Silva</Box>
        <Box ml={2}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline" />
            <MenuList>
              <MenuItem>
                Cerrar sesión
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Flex>
  </Box>
}
