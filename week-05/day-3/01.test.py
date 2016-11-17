import unittest
import Task_01

class DivideTest(unittest.TestCase):
    def test_zero_test(self):
        self.assertEqual(Task_01.divide(0), "Fail")

if __name__ == '__main__':
    unittest.main()
